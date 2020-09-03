var config = {
    style: 'mapbox://styles/vizdr/ckemwrhhv0mka1akef8twdhyn?fresh=true',
    accessToken: 'pk.eyJ1Ijoidml6ZHIiLCJhIjoiY2tjMmp3YnRpMDBweDJ6cXZvOGtqOTMzdSJ9.UabHGstx3fzde1pJiv4aAg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Three Best Museums in Austin for an Indoor Wedding',
    subtitle: 'During the summer, the temperature in Austin commonly tops 100 degrees. One affordable way to host your wedding indoors is to host it in a museum. While shopping for my own wedding venue, I narrowed my search to these three museums, based on their capacity and cost.',
    byline: 'By Amy Wu',
    footer: 'Data Sources: The Knot.com; Blanton Museum of Art; Jones Center - The Contemporary Austin; Bullock Texas State History Museum; Mapbox',
    chapters: [
       {
            id: 'first-museum',
            title: 'Blanton Museum of Art',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/University_of_Texas_at_Austin_August_2019_41_%28Jack_S._Blanton_Museum_of_Art%29.jpg/220px-University_of_Texas_at_Austin_August_2019_41_%28Jack_S._Blanton_Museum_of_Art%29.jpg',
            description: 'The Blanton has capacity for 150. Cost starts at $5,000.' +'<b>'+ 'For more information, call (512) 475-6516.' + '</b.>'+ 'Photo by Michael Barera.',

            location: {
                center: [-97.73744, 30.281],
                zoom: 17,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-museum',
            title: 'Jones Center - The Contemporary Austin',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/The_Contemporar_yAustin_-_JonesCenter.jpg/220px-The_Contemporar_yAustin_-_JonesCenter.jpg',
            description: 'The Jones Center has capacity for 250. Cost starts at $2,900.'+'<b>'+'For more information, call (512) 458-8191 ext. 255.'+'</b>'+'Photo by Laguna Jones.',
            location: {
                center: [-97.74269, 30.26958],
                zoom: 17,
                pitch: 45,
                bearing: -100
            },
            onChapterEnter: [],
            onChapterExit: []
          },
          {
              id: 'third-museum',
              title: 'Bullock Texas State History Museum',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/BobBullockMuseumAustinTX.JPG/220px-BobBullockMuseumAustinTX.JPG',
              description: 'This is the museum that we chose.'+'<b>'+'The Bullock has several floors available for weddings with a capacity for 300.'+</b>'+ 'The cost to reserve the ground floor is $4,500. For more information, call (512) 936-4632. Photo by WhisperToMe.',
              location: {
                  center: [-97.73915, 30.2803],
                  zoom: 17,
                  pitch: 45,
                  bearing: -40
              },
            onChapterEnter: [],
            onChapterExit: []

        }
    ]
};
