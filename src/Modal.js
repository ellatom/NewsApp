const { React, ReactDOM } = window
const { useState, Fragment } = React
const { createPortal} = ReactDOM
const Outsider = () => createPortal(<h1>Hello</h1>, document.body)


const Modal = ({ children, onClose, open }) =>
//   open ?
//     createPortal(
//       <div className='modal'>
//         <button onClick={onClose} className='modal__close'>&times;</button>
//         {children}
//       </div>,
//     document.body)
//     : null

// const App = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <Fragment>
//     <button onClick={() => setOpen(!open)}>Show Modal?</button>
//       <Modal open={open} onClose={() => setOpen(false)}>
//         Test Modal
//       </Modal>
//     </Fragment>
  )
}
  