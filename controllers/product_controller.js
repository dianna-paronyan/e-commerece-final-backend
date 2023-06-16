const { Product } = require("../models");
const { Category } = require("../models");
const { Image } = require("../models");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

// async function allProducts(req, res) {
//   try {

//     const products = await Product.findAll({
//       include: [{ model: Image }, { model: Category }]
//     });

//     const totalPages = 5;
//     res.status(201).json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }
async function allProducts(req, res) {
  try {
    const page = req.query.page;
    const pageSize = req.query.pageSize;

    const offset = (page - 1) * pageSize;

    const products = await Product.findAll({
      include: [{ model: Image }, { model: Category }],
      offset,
      limit: pageSize,
    });

    const totalCount = await Product.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(201).json({ products, totalPages });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
      include: [{ model: Image }, { model: Category }],
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createProduct(req, res) {
  const { name, price, description, quantity, categoryId } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    const newProduct = await Product.create({
      name,
      categoryId,
      price,
      description,
      quantity,
    });
    const images = req.files.map((file) => {
      return {
        fileName: file.filename,
        productId: newProduct.id,
      };
    });
    await Image.bulkCreate(images);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description, quantity, categoryId } = req.body;
  const { files } = req;

  try {
    const images = await Image.findAll({ where: { productId: id } });

    for (const image of images) {
      const filePath = path.join(
        __dirname,
        "..",
        "static",
        "images",
        image.fileName
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Image.destroy({ where: { productId: id } });

    if (files) {
      console.log("New File:", files);

      const imgs = files.map((file) => {
        return {
          productId: id,
          fileName: file.filename,
        };
      });
      const newImage = await Image.bulkCreate(imgs);

      console.log("New Image:", newImage);

      const product = await Product.findByPk(id);
      await product.addImage(newImage);
    }

    await Product.update(
      { name, price, description, quantity, categoryId },
      { where: { id } }
    );

    const updatedProduct = await Product.findByPk(id);

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const images = await Image.findAll({ where: { productId: id } });

    for (const image of images) {
      const filePath = path.join(
        __dirname,
        "..",
        "static",
        "images",
        image.fileName
      );
      fs.unlinkSync(filePath);
    }

    await Image.destroy({ where: { productId: id } });
    await Product.destroy({ where: { id } });

    res
      .status(200)
      .json({ message: "Product and associated images deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
}

module.exports = {
  allProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
