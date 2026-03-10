import '../styles/style.css'

function Education({ data, handleChange, isEditing }) {
    return (
        <section>
            <h2>Education</h2>

            {isEditing ? (
                <>
                    <input
                        name="school"
                        value={data.school}
                        onChange={handleChange}
                        placeholder="School Name"
                    />
                    <input
                        name="degree"
                        value={data.degree}
                        onChange={handleChange}
                        placeholder="Degree"
                    />
                    <input
                        name="eduDate"
                        value={data.eduDate}
                        onChange={handleChange}
                        placeholder="Study Period (e.g. 2020–2024)"
                    />
                </>
            ) : (
                <>
                    <p><strong>{data.school}</strong></p>
                    <p>{data.degree}</p>
                    <p>{data.eduDate}</p>
                </>
            )}
        </section>
    );
}

export default Education;