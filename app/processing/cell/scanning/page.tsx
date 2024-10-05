export default function Page() {
  return (
    <form action = '/' method = 'GET'>
        <input name="query" />
        <button type="submit">Search</button>
    </form>
    )
}