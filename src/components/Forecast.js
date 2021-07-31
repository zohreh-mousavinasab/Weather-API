import React from 'react';
import { Card, CardGroup } from 'semantic-ui-react';

export default function Forecast({forcast}) {
    return (
        <div>
            <CardGroup itemsPerRow={4}>
                {forcast.map((data) => {
                  return(
                   <Card>
                   <Card.Content>
                      <Card.Header>{Matt.round((data.temp.max + data.temp.min)/2)} ℃ </Card.Header>
                      <Card.Meta>{data.humidity} % </Card.Meta>
                      <Card.Description className="temp-desc">
                          {data.weather[0].description} 
                      </Card.Description>
                   </Card.Content>
                   </Card>
                  ) 
                })}
      
            </CardGroup>
        </div>
    )
}
