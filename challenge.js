function text_to_numeric(e) {
  
    // Get data from Form  
      let userRisk = e.values[3];
      let userTime = e.values[4];
      let userScore = e.values[5]
    
    //
    // Numeric Values correspond to Text 
    //
    
    const riskTolerance =  [
        {type:"low" ,value: 0},
        {type:"medium" ,value: 1},
        {type:"high" ,value: 2}
    ];
    
    const timeHorizon =  [
        {type:"shortTerm" ,value: 0},
        {type:"mediumTerm" ,value: 1},
        {type:"longTerm" ,value: 2}
    ]
    
    const assignScore =  [
        {type:"low" ,value: 0},
        {type:"medium" ,value: 1},
        {type:"high" ,value: 2}
    ]
    
    
    //
    // Finding correspond numeric value  based user Text 
    //
    
    risk = riskTolerance.find(item => item.type === userRisk);
    time = timeHorizon.find(item => item.type === userTime);
    score = assignScore.find(item => item.type === userScore);
    
    //
    // Storing  Numeric Value so it can used for Calculations and Google Script 
    //
    
    userRiskTolerance = risk.value;
    userTimeHorizon = time.value;
    userAssignScore = score.value;
    
    }
    
    
    
    
    