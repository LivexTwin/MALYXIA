export const PRODUCT_DROP_FRAGMENT = `
  fragment ProductDropFragment on Product {
    id
    title
    handle

    dropStock: metafield(namespace: "drop", key: "stock_display") {
      value
    }

    chapterBg: metafield(namespace: "chapter", key: "bg_image") {
      reference {
        ... on MediaImage {
          image {
            url
          }
        }
      }
    }

    options {
      name
      optionValues {
        name
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }

    selectedOrFirstAvailableVariant {
      id
      selectedOptions {
        name
        value
      }
      price {
        amount
        currencyCode
      }
      availableForSale
      quantityAvailable
    }

    variants(first: 100) {
      edges {
        node {
          id
          price {
            amount
            currencyCode
          }
          availableForSale
          quantityAvailable
          selectedOptions {
            name
            value
          }
        }
      }
    }

    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
  }
`;
