const mongoose = require("mongoose");
const mongoosPaginate = require("mongoose-paginate");

//criando esquema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

ProductSchema.plugin(mongoosPaginate);

mongoose.model("Product", ProductSchema);
