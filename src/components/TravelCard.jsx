export default function Header() {

    return (
        <div className="card">
            <img src="/images/lake-retba.jpg" alt="Lake Retba" className="card--photo" />

            <div className="card--info">
                <div className="card--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="card--country">Senegal</span>
                    <a href="#" className="card--map-url">View on Google Maps</a>
                </div>

                <h1 className="card--name">Lake Retba (Lac Rose)</h1>

                <h4 className="card--date">12 Jan, 2021 - 24 Jan, 2021</h4>

                <p className="card-description">Lake Retba, also called Lac Rose by locals, is a highly saline body of water – one of the highest in the world. The lake gets its color from safe bacteria in the water, which produce a red pigment to absorb sunlight. The best times to see the lake at its pinkest is during Senegal’s dry season, between November and June.</p>
            </div>
        </div>
    )
}