import { Plate, PlateContent } from '@udecode/plate'

export function TextEditor() {
  return (
    <div>
      <Plate initialValue={[{ children: [{ text: 'Hello World' }], type: 'p' }]}>
        <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-hidden rounded-md h-[40rem]' />
      </Plate>
    </div>
  )
}
