import Link from "next/link";
export default () => {
  let a = 9;
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>{a}</a>
      </Link>
    </div>
  );
};
