import React, { useState } from "react";
import Button from "./Button.js";
import './Calculator.css';
import myPicture from './images/Arpit.jpg';

function Calculator() {
    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false);
    
    const ClickHandle = (e) => {
        if (e.target.value === "C") {
            setText("");    
        } else if (e.target.value === "=") {
            try {
                const result = eval(text1);
                setText(result.toString());
            } catch (error) {
                setText("Error");
            }           
        } else if (e.target.value === "show me") {
            setShowImage(!showImage);
        } else if (e.target.value === "square") {
            try {
                const num = parseFloat(text1);
                if (!isNaN(num)) {
                    setText((num * num).toString());
                }
            } catch (error) {
                setText("Error");
            }
        } else {
            setText(text1 + e.target.value);
        }
    };
    
    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            
            {showImage && (
                <div style={{textAlign: 'center', margin: '10px 0'}}>
                    <img 
                        src={myPicture} 
                        alt="My Profile" 
                        style={{
                            width: '150px', 
                            height: '150px', 
                        
                            objectFit: 'cover',
                            border: '3px solid #0997f5'
                        }}
                    />
                </div>
            )}
            
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
            </div>
            
            <div>
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
            </div>
            
            <div>
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
            </div>
            
            <div>
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
            </div>
            
            {/* New buttons for Task 2 and 3 */}
            <div>
                <Button label="show me" ClickHandle={ClickHandle}/>
                <Button label="square" ClickHandle={ClickHandle}/>
            </div>
        </div>
    );
}

export default Calculator;