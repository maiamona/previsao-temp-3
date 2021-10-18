class Fetch{
    async getCurrent(input){
        const myKey ="6c55e8395c583956a1084ea91d2a0d3b";

        // make request to url

        const response = await fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}