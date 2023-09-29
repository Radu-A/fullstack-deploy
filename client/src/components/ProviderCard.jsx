export default function ProviderCard({ provider }) {

  return (
    <article className="provider-card-artile">
      <h2>{provider.company_name}</h2>
      <p>{provider.CIF}</p>
      <p>{provider.address}</p>
    </article>
  );
}
