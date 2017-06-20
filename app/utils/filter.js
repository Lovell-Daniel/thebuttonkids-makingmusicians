export function satisfiesCategory(selection, categoryName) {
  if (selection === "All Categories")
    return true
  if (selection === categoryName)
    return true
  return false
}

export function satisfiesSize(selection, bigButtonId, smallButtonId, product) {
  const hasBigButtonCollection = product.relationships.collections.data.find((collection) => {
    return collection.id === bigButtonId;
  })

  const hasSmallButtonCollection = product.relationships.collections.data.find((collection) => {
    return collection.id === smallButtonId;
  })

  if (selection === "All")
    return true
  if (selection === "Big Buttons" && hasBigButtonCollection)
    return true
  if (selection === "Small Buttons" && hasSmallButtonCollection)
    return true
  return false
}

export function satisfiesCustomizable(selection, customizableId, product) {
  const hasCustomizableCollection = product.relationships.collections.data.find((collection) => {
    return collection.id === customizableId;
  })
  if (selection === "All")
    return true
  if (selection === "Customizable" && hasCustomizableCollection)
    return true
  if (selection === "Not Customizable" && !hasCustomizableCollection)
    return true
  return false
}

export function getRelationshipName(relationshipId, relationshipList) {
  const relationship = relationshipList.find((relationship) => {
    return relationshipId === relationship.id
  })
  return relationship.name
}

export function getRelationshipId(relationshipName, relationshipList) {
  const relationship = relationshipList.find((relationship) => {
    return relationshipName === relationship.name
  })
  return relationship.id
}
