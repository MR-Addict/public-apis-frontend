export default function Head({ params }) {
  return (
    <>
      <title>{"Public APIs | " + decodeURIComponent(params.categoryid)}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Free Public APIs' />
      <link rel='icon' href='/favicon.png' />
    </>
  );
}
