import React from 'react';
import { Card, CardGroup } from 'semantic-ui-react';
import moment from 'moment';

export default function Forecast({forcast}) {
    return (
        <div style={{marginTop= 20}}>
            <CardGroup itemsPerRow={4}>
                {forcast.map((data) => {
                  return(
                   <Card className="forecast-card">
                   <Card.Content>
                      <Card.Header className="forecast-date">
                       date:{moment.unix(data.dt).format['LL']}
                       </Card.Header>
                        <Card.Meta className="forecast-header">
                          Humidity: {data.humidity} % 
                      </Card.Meta>
                      <Card.Description className="temp-desc">
                      Description: {data.weather[0].description} 
                      </Card.Description>
                   </Card.Content>
                   </Card>
                  ) 
                })}
      
            </CardGroup>
        </div>
    )
}
