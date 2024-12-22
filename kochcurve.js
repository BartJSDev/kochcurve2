class Kochcurve{

    constructor(x , y , len , angle ,  iterations , color){

        this.x = x
        this.y = y
        this.len = len 
        this.iterations = iterations
        this.color = color
        this.segments = []
        this.newsegments = []
        this.angle = angle
        this.counter = 0
    }

    create(){

        this.newsegments = []

        if(this.counter < this.iterations){

            //increase thie.counter
            this.counter++

        }else{

            //we are done
            console.log("we are done")
            return;

        }

        //add the first line
        if(this.segments.length === 0){

            this.segments.push(new Kochline(this.x , this.y , this.len , this.angle))

        }else{

            //add the next iteration of lines
            this.segments.forEach(segment => {

                let newlen = segment.len / 3
                let kochline1 = new Kochline(segment.sx , segment.sy , newlen , segment.angle)
                let kochline2 = new Kochline(kochline1.ex , kochline1.ey , newlen , segment.angle - Math.PI/3)
                let kochline3 = new Kochline(kochline2.ex , kochline2.ey , newlen , segment.angle + Math.PI/3)
                let kochline4 = new Kochline(kochline3.ex , kochline3.ey , newlen , segment.angle)

                this.newsegments.push(kochline1 , kochline2 , kochline3 , kochline4)
            })

            this.segments = this.newsegments
        }

        setTimeout(this.create.bind(this) , 250)
    }

    draw(){

        this.segments.forEach(segment => {

            c.beginPath()
            c.strokeStyle = this.color
            c.moveTo(segment.sx , segment.sy)
            c.lineTo(segment.ex , segment.ey)
            c.stroke()
            c.closePath()
        })

    }
}