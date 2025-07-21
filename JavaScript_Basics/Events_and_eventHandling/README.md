# what is a event
A event is anything happen on on the web page 

# what is event listner
A event listner is the reaction to the action occur on the web page

## common events
- click (when click on anything)
- dblclick  (double click)
- input (input event occur when action occur on the input area)
- submit (change event occur when there will be change in input,select or select area)- 
- mouseover
- change 
- keyup

## 🔁 Event Bubbling

**Definition:** Event bubbling means the event starts at the **target element** (the one you interact with) and then **bubbles up** to its ancestors (parent, grandparent, etc.).

**Real-life example:**  
Imagine dropping a stone in a small bowl placed inside a bigger one. The ripples travel **outward**, just like the event going from the child element to the outer ones.

**Order:**  
Child ➜ Parent ➜ Grandparent

**Note:** This is the default behavior in most browsers.

---

## 🔽 Event Capturing

**Definition:** Event capturing is the opposite of bubbling. The event starts from the **outermost element** and travels **inward** to the target element.

**Real-life example:**  
Think of a message being passed from the boss to the manager to the employee. The communication goes from the **top down**.

**Order:**  
Grandparent ➜ Parent ➜ Child

**Note:** This behavior has to be specifically enabled — it's not the default.

---

## 🔒 Stopping Event Flow

Sometimes you might want to **stop** the event from going further (either in bubbling or capturing). JavaScript provides ways to prevent this to avoid multiple elements reacting unnecessarily.

---