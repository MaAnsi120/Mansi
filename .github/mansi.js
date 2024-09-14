[12:54 pm, 14/9/2024] Mansi: body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.search-container {
    text-align: center;
    margin-top: 50px;
}

#search-bar {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#suggestions {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    max-height: 200px;
    overflow-y: auto;
}

.suggestion-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.suggestion-item:hover {
    background-color: #f0f0f0;
}

