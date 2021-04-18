const DynamicComponent = (props) => {
  const TagName = props.tag
  return <TagName className={props.className} />
}

export default DynamicComponent
