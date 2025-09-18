import "./Clients.css";

function Clients() {
    const clients = [
        { name: "Client A", logo: "/images/client1.png" },
        { name: "Client B", logo: "/images/client2.png" },
        { name: "Client C", logo: "/images/client3.png" },
        { name: "Client D", logo: "/images/client4.png" },
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
