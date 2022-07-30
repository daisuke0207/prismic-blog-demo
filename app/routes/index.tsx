import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/blogs" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>
    </div>
  );
}
