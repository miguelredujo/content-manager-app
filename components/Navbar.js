import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
      }}
    >
      <Link href="/">
        <button style={{ padding: "0 24px", backgroundColor: "red" }}>
          content manager
        </button>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Link href="/">
          <a style={{ padding: "0 24px" }}>home</a>
        </Link>
        <Link href="/resources/new">
          <a style={{ padding: "0 24px" }}>add</a>
        </Link>
        <Link href="/resources/features">
          <a style={{ padding: "0 0 0 24px" }}>features</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
