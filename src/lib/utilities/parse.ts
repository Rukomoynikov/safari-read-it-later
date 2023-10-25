import { ReadingListCheck } from '$lib/utilities/finders'

export function parse(input: string): RegExpMatchArray[] | null {
  if (!ReadingListCheck.test(input)) return null

  const regex = new RegExp(`${ReadingListCheck}`, "gi");
  const match = input.matchAll(regex);
  const results = Array.from(match);

  console.log('----------------')
  console.log('Results', results)
  console.log('----------------')

  return results
}
