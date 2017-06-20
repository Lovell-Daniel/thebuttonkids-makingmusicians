import { gateway as MoltinGateway } from '@moltin/sdk';
import settings from "../settings.json";

const Moltin = MoltinGateway({
  client_id: settings.moltin.client_id
});

export function fetchProducts() {
  return Moltin.Products.All()
}

export function fetchCart() {
  return Moltin.Cart.Get()
}

export function fetchCategories() {
  return Moltin.Categories.All()
}

export function fetchCollections() {
  return Moltin.Collections.All()
}

export function fetchFile(fileId) {
  return Moltin.Files.Get(fileId)
}

export function fetchCategory(categoryId) {
  return Moltin.Categories.Get(categoryId)
}

export function fetchCollection(collectionId) {
  return Moltin.Collections.Get(collectionId)
}

export function addToCart(productId, quantity) {
  return Moltin.Cart.AddProduct(productId, quantity)
}

export function deleteCart() {
  return Moltin.Cart.Delete()
}
