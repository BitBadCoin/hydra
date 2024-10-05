function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

export default function Page() {
  return (
    <form action = '/' method = 'GET'>
        <input name="query" />
        <MyButton />
    </form>
    )
}