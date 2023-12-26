import { useEffect, useRef } from 'react'

const TextCheckbox = () => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref.current?.setAttribute(
      'onchange',
      "(function(elem) {const outerContainer = elem.parentElement.parentElement;console.log(outerContainer);if (outerContainer && outerContainer.children.length === 2) {const text = outerContainer.children[1];text.style.textDecoration = event.currentTarget.checked ? 'line-through' : '';text.style.color = event.currentTarget.checked ? 'hsl(215.4 16.3% 46.9%)' : '';}})(this);return false;",
    )
  }, [])
  return <input defaultChecked={false} ref={ref} type='checkbox' />
}

export { TextCheckbox }
