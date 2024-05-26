const renderHexagons = () => {
    const container = document.getElementById("container");
    container.innerHTML = '';
    const { left, right } = container.getBoundingClientRect()
    const hexagonAlign = "center"
    const containerWidth = right - left

    const hexagonSpacing = 10
    const hexagonWidth = 100

    let hexagonCount = 30;
    const maxHexagonByRow = Math.floor(containerWidth / (hexagonWidth + hexagonSpacing))
    const maxRow = Math.ceil(hexagonCount / maxHexagonByRow)
    const finalMaxRow = Math.ceil((hexagonCount + Math.floor(maxRow / 2)) / maxHexagonByRow)

    for (let row = 0; row < finalMaxRow; row++) {
        let currentRow = document.createElement("div")
        currentRow.setAttribute("class", "row")
        container.appendChild(currentRow)
        let currentRowHexCount;
        const isEvenRow = row % 2 === 0
        for (let hexIndex = 0; hexIndex < (isEvenRow ? maxHexagonByRow : maxHexagonByRow - 1); hexIndex++) {
            let hexagono = document.createElement("div")
            hexagono.setAttribute("id", "hexagon")
            hexagono.style.width = hexagonWidth + "px"
            currentRow.appendChild(hexagono)
            currentRowHexCount = hexIndex + 1
            hexagonCount--
            if (hexagonCount === 0) break;
        }
        if (!isEvenRow) {
            if (hexagonAlign === "left") {
                currentRow.style.marginLeft = (hexagonWidth + hexagonSpacing) / 2 + "px"
            } else if (hexagonAlign === "center") {
                const rowMarginLeft = Array(maxHexagonByRow - currentRowHexCount).fill(null).reduce((total) => {
                    return total + (hexagonWidth + hexagonSpacing)
                }, 0)
                currentRow.style.marginLeft = rowMarginLeft / 2 + "px"

            } else if (hexagonAlign === "right") {
                const rowMarginLeft = Array(maxHexagonByRow - currentRowHexCount).fill(null).reduce((total) => {
                    return total + (hexagonWidth + hexagonSpacing)
                }, 0)
                currentRow.style.marginLeft = rowMarginLeft - (hexagonWidth + hexagonSpacing) / 2 + "px"
            } else {
                currentRow.style.marginLeft = (hexagonWidth + hexagonSpacing) / 2 + "px"
            }
        }
    }
}

renderHexagons()
window.addEventListener("resize", renderHexagons)


