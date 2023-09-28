export default function TravelCard(props) {
    return (
        <div className="card">
            <img src={`/images/${props.imageName}`} alt={props.title} className="card--photo" />

            <div className="card--info">
                <div className="card--location">
                    <i className="fa-solid fa-location-dot card--location-icon"></i>
                    <span className="card--country">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--map-url">View on Google Maps</a>
                </div>

                <h1 className="card--name">{props.title}</h1>

                <h4 className="card--date">{props.startDate} - {props.endDate}</h4>

                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}