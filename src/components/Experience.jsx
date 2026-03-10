import '../styles/style.css'

function Experience({ data, handleChange, isEditing }) {
    return (
        <section>
            <h2>Experience</h2>

            {isEditing ? (
                <>
                    <input
                        name="company"
                        value={data.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                    />
                    <input
                        name="position"
                        value={data.position}
                        onChange={handleChange}
                        placeholder="Job Title"
                    />
                    <input
                        name="expDate"
                        value={data.expDate}
                        onChange={handleChange}
                        placeholder="Work Period (e.g. 2022–Present)"
                    />
                </>
            ) : (
                <>
                    <p><strong>{data.company}</strong></p>
                    <p>{data.position}</p>
                    <p>{data.expDate}</p>
                </>
            )}
        </section>
    );
}

export default Experience;