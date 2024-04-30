
function ProductField({id, name, isEdit, editProp, type, }){
	return isEdit ? (
		<input value={name} onChange={(event) => editProp(id, type, event)} />
	) : (
		<span>{name}</span>
	)
	
}

export default ProductField;