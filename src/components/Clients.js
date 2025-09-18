import "./Clients.css";

function Clients() {
    const clients = [
        { name: "@techthetix", logo: "/images/client1.png" },
        { name: "@ankit.joshi._", logo: "/images/client2.png" },
        { name: "@imrankerofficial", logo: "/images/client3.png" },
        { name: "@karanlohiaafinance", logo: "/images/client4.png" },
        { name: "@technomanyu", logo: "/images/client5.png" },
    ];

    return (
        <section className="clients" id="clients">
            <h2>My Clients</h2>
            <div className="clients-grid">
                {clients.map((client, index) => (
                    <div className="client-card" key={index}>
                        <img src={client.logo} alt={client.name} />
                        <p>{client.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clients;
