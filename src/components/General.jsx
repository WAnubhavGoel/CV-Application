import '../styles/style.css'

function General({ data, handleChange, isEditing }) {
    return (
        <section>
            <h2>General Information</h2>

            {isEditing ? (
                <>
                    <input
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                    />
                    <input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                </>
            ) : (
                <div className="general-header">
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                </div>
            )}
        </section>
    );
}

export default General;