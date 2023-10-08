import ApppleGreenSmith from "../assets/images/AppleGreenSmith.png"
import AvocadeHass from "../assets/images/AvocadoHass.jpg"

export const primaryHeader = [
  { label: 'Store', page: "./store" },
  { label: 'Orders', page: "/order" },
  { label: 'Analytics', page: '/analytics' },
]

export const productInformation = [
  { label: 'Supplier', value: 'East Coast Fruits & Vegetables' },
  { label: 'Shipping Date', value: 'Thu, Feb 10' },
  { label: 'Total', value: '$ 15,028.3' },
  { label: 'Department', value: '300-444-687' },
  { label: 'Status', value: 'Waiting for approval' },
]

export const productData = [
  {
    id: crypto.randomUUID(),
    product_name: 'Chicken Breasts Fillets, Boneless matuu',
    brand: "Hornell Black Labelmany",
    price: "$60.67",
    quantity: '0',
    total: "0",
    image: AvocadeHass,
    approved: false,
    isMissing: false,
    isUrgentMissing: false
  },
  {
    id: crypto.randomUUID(),
    product_name: 'Chicken Breasts Fillets, Boneless matuu',
    brand: "Hornell Black Labelmany",
    price: "$60.67",
    quantity: '15',
    total: "9000.88",
    image: ApppleGreenSmith,
    approved: false,
    isMissing: false,
    isUrgentMissing: false
  },
  {
    id: crypto.randomUUID(),
    product_name: 'Chicken Breasts Fillets, Boneless matuu',
    brand: "Hornell Black Labelmany",
    price: "$60.67",
    quantity: '0',
    total: "0",
    image: AvocadeHass,
    approved: false,
    isMissing: false,
    isUrgentMissing: false
  },
  {
    id: crypto.randomUUID(),
    product_name: 'Chicken Breasts Fillets, Boneless matuu',
    brand: "Hornell Black Labelmany",
    price: "$60.67",
    quantity: '15',
    total: "9000.88",
    image: ApppleGreenSmith,
    approved: false,
    isMissing: false,
    isUrgentMissing: false
  },
  {
    id: crypto.randomUUID(),
    product_name: 'Chicken Breasts Fillets, Boneless matuu',
    brand: "Hornell Black Labelmany",
    price: "$60.67",
    quantity: '0',
    total: "0",
    image: AvocadeHass,
    approved: false,
    isMissing: false,
    isUrgentMissing: false
  }
]

export const modalStyle = {
  display: "flex",
  flexDirection: "column",
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 30,
  p: 5,
};
