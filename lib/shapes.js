class Shapes {
    constructor(text, color, background) {
        this.text = text
        this.color = color
        this.background = background
    }
}
class Circle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="${this.background}" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="16">
                ${this.text}
            </text>
        </svg>`
    }
}
class Triangle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50, 10 90, 90 10, 90" fill="${this.background}" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="16">
                ${this.text}
            </text>
        </svg>`
    }
}
class Square extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" fill="${this.background}" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="16">
                ${this.text}
            </text>
        </svg>`
    }
}
module.exports = { Circle, Triangle, Square }