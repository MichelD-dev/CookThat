// import { useState } from 'react'

// const Ingredients = ({data}) => {
//   const [ingredient, setIngredient] = useState('')
//   const [quantity, setQuantity] = useState()
//   const [unit, setUnit] = useState()

//   return (
//     <form className='ui form container segment'>
//       <div className='field'>
//         <label htmlFor='quantity'>Ingrédient</label>
//         <input
//           type='text'
//           onChange={e => setIngredient(e.currentTarget.value)}
//           value={ingredient}
//         />
//       </div>

//       <div className='two fields'>
//         <div className='field'>
//           <div className='field'>
//             <label htmlFor='quantity'>Quantité</label>
//             <input
//               type='text'
//               id='quantity'
//               onChange={e => setQuantity(e.currentTarget.value)}
//               value={quantity}
//             />
//           </div>
//         </div>
//         <div className='field'>
//           <label htmlFor='unit'>Mesure</label>
//           <select
//             id='unit'
//             className='ui fluid search dropdown'
//             onChange={e => setUnit(e.currentTarget.value)}
//             value={unit}
//           >
//             <option value='1'>c.a.s</option>
//             <option value='2'>c.a.c</option>
//             <option value='3'>centilitres</option>
//             <option value='4'>grammes</option>
//             <option value='5'>portions</option>
//           </select>
//         </div>
//       </div>
//       <button className='fluid ui red button'>Supprimer</button>
//       <br />
//     </form>
//   )
// }

// export default Ingredients
