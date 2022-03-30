# pi-multi-dashboard
Personal dashboard with multiple views to be displayed by a Raspberry Pi served with Flask. Interacted with by API calls, primary through iOS Shortcuts.

## Running the Dashboard
From the base directory, execute `flask run`. The server should start, running on localhost over port 5000. To access the dashboard, open a browser to http://localhost:5000.

## Weather Dashboard Setup
In order to set up the weather dashboard, you first need to create an account with the [OpenWeatherMap API](https://openweathermap.org/api). Then, you need to export your API key to your environment: `export WEATHER_KEY=YOUR_API_KEY`. Soon, a config file will be added which allows you to set the parameters for a fixed location and options like units.
