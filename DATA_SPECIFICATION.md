# Data Specification

## 1. Root
|Attribute|Type|Description
|---|---|---  
|width|Number|Width of the graph area
|height|Number|Height of the graph area
|isFluid|Boolean|`true` if graph area is fluid
|background|String| Color name/code
|nodes|Array(Object)| See `1-1. Node`
|links|Array(Object)| See `1-2. Link`

## 1-1. Node
|Attribute|Type|Description
|---|---|---
|id|String|
|content|Object| See `1-1-1. Content`
|width|Number|
|height|Number|
|shape|String| `rectangle` or `ellipse`
|point|Object| See `1-1-2. Point`

### 1-1-1. Content
|Attribute|Type|Description
|---|---|---
|text|String|
|url|String|Link url
|color|Srring|Color name/code

### 1-1-2. Point
|Attribute|Type|Description
|---|---|---
|x|Number|
|y|Number|

## 1-2. Link
|Attribute|Type|Description
|---|---|---
|id|String|
|source|String|ID of the source node
|destination|String|ID of the destination node
|point|Object|See `1-2-1. Point`
|color|String|Color name/code
|pattern|String|`solid`, `dash`, or `dot`
|arrow|String|`none`, `src`, `dest`, or `both`

### 1-2-1. Point
Middle control point of bezier curve  

|Attribute|Type|Description
|---|---|---
|x|Number|
|y|Number|
