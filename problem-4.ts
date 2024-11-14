type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

const calculateShapeArea = (shape: Circle | Rectangle): number | undefined => {
    if ("radius" in shape && shape.shape === "circle") {
        return Math.PI * Math.abs(shape.radius) * Math.abs(shape.radius);
    }
    else if ("width" in shape && "height" in shape && shape.shape === "rectangle") {
        return Math.abs(shape.width) * Math.abs(shape.height);
    }
    else {
        return undefined
    }
}