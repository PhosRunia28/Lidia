
export default function Copyright() {
    const date = new Date().getFullYear();
  return (
    <div className="bg-primary py-10 text-center text-white">
      <p className="text-sm font-bold">© {date} Lidia. All rights reserved.</p>
    </div>
  );
}
