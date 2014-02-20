# The Inspectors (The Other Sidebar) {#TheInspectors}

Along the right side of the window, you’ll find the **Inspectors** sidebar. You use the Inspectors to change the style attributes for the objects on the Canvas, or set the properties of the Canvas itself. If you don’t see them, click the **Inspect** button in the toolbar, or choose **View \> Show Inspectors** (**Shift-⌘-I**) from the menu bar.

The Inspectors sidebar contains five inspectors—Object, Type, Properties, Canvas, and Document—and the **Stencils Library**, which used to have its own floating palette in earlier versions of OmniGraffle. Inspectors are grouped by the type of content they govern. You can browse the various Inspector categories by clicking the icons along the top of the sidebar. Within each Inspector, you’ll find multiple, collapsable inspectors for changing the properties of an object.

To open an Inspector, hover over the title with the mouse, and then click on the disclosure triangle to open and use the inspector. To open one particular inspector (for example the **Stroke** inspector) any other open inspectors, **Shift-Option-click** on the disclosure triangle. To open or close all of the inspectors, **Shift-⌘-click** on one of the disclosure triangles.

![Click the title of an inspector thats closed to open it up](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_useof.png)

## Using the Inspectors {#UsingTheInspectors}

If you find that you’re using a particular Inspector section quite a bit, you can lock it in the open position. Just double-click the Inspector’s button instead of single-clicking it; the button gets a green lock icon. As you show and hide other sections in the same inspector window, the locked section remains visible. When you’re done, just double-click the button again and the lock icon goes away. The lock also goes away when you switch to another Inspector; for example, from a locked Object inspector to the Type inspector.

In all of the inspectors, you can click in a text field that contains a number, and then press the up or down arrow keys to increment or decrement the number. Also, once you click a circular rotation control, you can keep the mouse button held down while moving the pointer away from the control to gain more rotational precision.

Any color well can have its color dragged to an object on the canvas or to another color well. When you drag to an object, you can drop the color on the object’s stroke, fill, or text.

In places where you can enter measurements, such as in the Geometry inspector, values are shown in the current ruler units, or, if there is no unit scale, in the canvas units. You can, however, enter values in any units that are available in the ruler, such as miles or kilometers. As soon as you finish entering the value, OmniGraffle converts it to the correct units automatically.

You can also perform simple arithmetic and mix units. Add (**+**), subtract (**−**), multiply (**\***), or divide (**/**) numbers right in the input fields.

## Object Inspectors {#ObjectInspectors}

Use the **Object inspectors** to view and change details about the objects on the Canvas.

### Coloring Shapes with the Fill Inspector {#TheFillInspector}

Use the Fill inspector to choose a color or gradient to fill the inside of the selected shapes.

![The Fill Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_01_fillinspector.png)

-   Use the pop-up menu on the left side of the inspector to choose from the nine kinds of fill: Solid, Linear Blend, Radial Blend, Double Linear Blend, Double Radial Blend, Stipple, Marker, and Squiggle. No Fill is also available as an option for objects where transparency is desired.

-   The blend rotation control becomes active when you choose a linear blend; enter a number of degrees in the field or drag the circular control to set the angle of the gradient. The blend position control becomes active when you choose a radial gradient; drag its crosshair to move the gradient’s center.

-   Click the color well to choose the color of the fill.

-   If you have chosen a two-color blend, you can click the swap button to exchange the two colors.

-   If you choose a blend, two or three color wells become available. Click them to choose the colors to blend together.

-   Drag the bias slider on the far right to shift a blend toward one side or the other.

You can also edit the fill color of a canvas itself using the Canvas Fill inspector.

*PRO* OmniGraffle Pro offers an extra section in the Color panel for creating pattern fills.

### The Stroke Inspector {#TheStrokeInspector}

Use the Stroke inspector to change the appearance of the selected connection lines or of the line drawn around the edge of the selected shapes.

![The Stroke Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_02_strokeinspector.png)

-   Use the dropdown menu to choose a single stroke, double stroke, freehand stroke, or no stroke at all.

-   Click the color well to choose a color for the stroke.

-   Enter a number in the Thickness field or use the keyboard arrows to choose how thick the stroke should be.

-   The first of the three pop-up menus determines the stroke pattern (solid, dashed, dotted, et cetera). The center pop-up menu determines how the stroke appears at its ends: The Butt option ends the line by cutting across its endpoint at an angle perpendicular to the line itself, while the Round and Square options let the line extend past its endpoint based on the stroke width. The third pop-up menu determines how the stroke appears at its corners: Miter creates a sharp corner, Round creates a soft corner, and Bevel creates a cut-off corner.

### Making Objects Cast Shadows with the Shadow Inspector {#TheShadowInspector}

Use the Shadow inspector to drop a shadow behind the selected objects.

![The Shadow Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_03_shadowinspector.png)

-   Click the leftmost button to choose whether the selected object has a shadow, and if the shadow appears in front of objects or behind objects on the same layer. If you choose to let shadows appear in front of objects on the same layer, the ordering of objects matters; you can reorder objects with the Bring and Send commands in the Arrange menu.

-   Enter a number in the blur field or use the keyboard arrows to choose how precise or blurry the shadow should be.

-   Drag the crosshair in the offset control or enter numbers in the offset fields to set how far away from the object the shadow should fall.

-   Click the color well in the upper-right to choose a color for the shadow; partially transparent black tends to work best.

### The Shapes Inspector {#TheShapesInspector}

If you have a shape object selected, use this inspector to transform it in various ways.

![The Shapes Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_04_shapesinspector.png)

-   To change the shape to another, the upper right button provides a grid containing available shapes. It includes all of OmniGraffle’s built-in shapes plus all of the current canvas’s custom shapes (ones created with the pen tool or shape combinations).

-   Use the Corner Radius field to set how round the corners of the shape should be; enter 0 for perfectly pointy corners.

-   (**Pro**) With multiple shapes selected, use the Combine Shapes button as an alternative tool for crafting custom shapes. Available actions include Unite Shapes, Intersect Shapes, Subtract Shapes, and Uncombine Shapes. OmniGraffle will do its best to preserve all data associated with the combined objects, but some (text in particular) may be lost when the Uncombine Shapes action is used.

-   (**Pro**) Check the Edit Points checkbox to convert the shape to a custom object with editable Bézier points.

### The Lines Inspector {#TheLinesInspector}

Use this inspector to configure the properties of a selected line.

![The Lines Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_05_linesinspector.png)

-   The three pop-up menus determine the style of the tail, middle, and head of the line. Use the tail and head menus to set the line endings. Use the middle menu to set how the line travels from its source to its destination: Straight for a line that takes the shortest possible path between points, Curved for a line that turns smoothly to pass through each point, Orthogonal for a line that always travels horizontally or vertically, or Bézier for a line with control points you can adjust with the selection tool.

-   Use the fields below the tail and head menus to change the line ending sizes. Click the reverse button to swap the line’s source and destination points.

-   Click Remove Midpoints to get rid of all points between the source and destination points.

-   The Line Hops menu determines what the line should do when it crosses other lines; choose one of the hop types to make the line jump over or under other lines, or choose Ignore this line to prevent other lines from hopping over or under it. The hops depend on the ordering of the lines involved; you can reorder objects with the Bring and Send commands in the Arrange menu.

### Placing Graphics Inside a Shape with the Image Inspector {#TheImageInspector}

You can use this inspector to position an image inside a shape. (Note that instead of creating an object and then adding an image, you could also simply drag an image file from another application straight onto the canvas.)

![The Image Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_06_imageinspector.png)

-   Use the Image pop-up menu to set an image in the selected shape. Once an image is set, a Remove Image command appears in the menu.

-   When you browse for an image file, you have the option of creating an alias (or “link”) to the image instead of adding the image to the OmniGraffle file itself. If you do this, the OmniGraffle document depends on the original image file; the alias will not work if you delete the image file or open the document on a different computer. If an object’s image comes from an alias, some extra commands become available in the Image pop-up menu: you can Open the original image file, Reveal the original file in the Finder, or stop using the alias and Embed a copy of the image in the OmniGraffle document.

-   Another way to set an image is just to drag an image file from another application and drop it on the image well, or on the shape object itself.

-   The first button displays the image at its natural aspect ratio, with a zoom level and position as set with the controls below. The second button makes the image stretch to fit inside the object. The third button makes the image tile indefinitely across the object.

-   The positioning offsets are enabled if you are displaying the image at its natural aspect ratio, as set by the first of the three buttons above. You can type a positive or negative percentage, or just drag the image around in the image well to indicate the area you want.

-   The zoom controls are available unless you are stretching the image to fit the shape. You can enter a zoom percentage, or just drag the slider, to make the image larger or smaller.

-   You can make the image transparent and let the object’s fill show through by decreasing the value of the opacity field, or by dragging the opacity slider.

### Changing Object Position and Size with the Geometry Inspector {#TheGeometryInspector}

This inspector deals with an object’s position and orientation.

![The Geometry Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_07_geometryinspector.png)

-   To rotate the object, enter a degree value in the rotation field, or drag the circular control.

-   The top two fields contain the X and Y (horizontal and vertical) coordinates for the selected objects; the value represents the distance between the canvas’s origin and the upper-left corner of the object (which might not be obvious if the object is rotated or flipped). If you have multiple objects selected, two hyphens (**- -**) appear in the fields that have different values. Enter a new X or Y value to move an object on the canvas.

-   The next two fields contain the Width and Height values for the selected objects. If you have multiple objects selected, two hyphens (**- -**) appear in the fields that have different values. Enter a new width or height value to resize an object on the canvas.

-   Click the flip buttons to reverse the object horizontally or vertically.

-   Next to the flip buttons is a pop-up menu with the following options:

    -   **No scaling** — by default, the objects you draw on the canvas are not scaled to any size or proportion.
    -   **Maintain Aspect Ratio** — the objects you draw or resize are scaled proportionally. In addition, there are three additional aspect-related options:
        -   **Scale Stroke** — scales the object’s stroke proportionally.
        -   **Scale Font** — scales any text inside the object proportionally.
        -   **Scale Stroke and Font** — scales the objects stroke and text proportionally.

If you have selected a line label, two additional controls become active:

![Additional geometry controls for labels](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_07_geometry_labels.png)

Use the pop-up menu to set how the label’s text appears in relation to the line. Options include: Horizontal, Vertical, Parallel, Perpendicular, Independent, and Follows Path. Use the slider next to the pop-up menu to change the label’s position in relation to the line.

### Positioning Objects Neatly with the Alignment Inspector {#TheAlignmentInspector}

Use this inspector to line up and space out objects uniformly.

![The Alignment Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_08_alignmentinspector.png)

-   The matrix of nine buttons on the left changes how the alignment buttons work. It represents all of the combinations between vertically aligning to the top, middle, or bottom, and horizontally aligning to the left, center, or right. If you want, for example, to align objects by their upper-right corners, click the upper-right button in the matrix.

-   Next to the button matrix are the align buttons. Their icons change to reflect the state of the button matrix. Click the horizontal-align button to line up the selected objects horizontally. Click the vertical-align button to line up the selected objects vertically. The first object you selected stays where it is, and the other selected objects move to align with it. These buttons are only useful when you have at least two objects selected.

-   Next to the align buttons are two spread buttons. Click the horizontal spread button to distribute the selected objects evenly between the leftmost and rightmost objects. Click the vertical spread button to distribute the selected objects evenly between the top and bottom objects. These buttons are only useful when you have at least three objects selected.

-   To the right are two fields and their associated spacing buttons. Enter a value in the top field and click the horizontal spacing button to put the specified amount of horizontal space between the selected objects. Enter a value in the bottom field and click the vertical spacing button to put the specified amount of vertical space between the selected objects. These buttons are only useful if you have at least two objects selected.

-   If Align to canvas is selected, the align and spread buttons consider the canvas edges as “objects” when arranging the selected objects. This makes it so that you can align objects to a canvas edge, or space objects evenly between the canvas edges.

## Type Inspectors {#TypeInspectors}

Manage the typography of selected objects.

### The Font Inspector {#TheFontInspector}

Use this inspector to modify the font properties of the selected objects, including style, size, and color.

![The Font Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_09_fontinspector.png)

### Positioning and Styling Text with the Text Inspector {#TheTextInspector}

Use this inspector to control the positioning and appearance of the selected shape’s text.

![The Text Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_10_textinspector.png)

-   With the horizontal alignment buttons, you can align left, center, align right, or justify the text.

-   Click the color well to choose a font color.

-   There are three buttons for controlling what happens when the shape contains more text than can be contained within its bounds. You can choose to let the text overflow outside of the shape, to clip off the text that doesn’t fit inside the shape, or to resize the shape to make the text fit. If you choose resize, the object will only be manually resizable in the horizontal direction; it will resize vertically according to its text. Select the Wrap to shape checkbox to limit the text’s width to the limits set by the Text Offset settings below.

-   There are three buttons for setting the vertical alignment of the text; choose to align to the top, middle, or bottom of the shape.

-   On the right side are controls for setting the Kerning (automatic character spacing for ideal balance), Tracking (manual character spacing), Leading (distance between lines), and Margins (distance between text and the edges of the text area). These controls become enabled or disabled depending on other controls in the inspector, or the amount of text in the object.

### The Offsets Inspector (**Pro**) {#TheOffsetInspector}

This inspector contains the Text Offset and Text Rotation controls.

![The Offset Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_11_offsetsinspector.png)

By default, the **Use default offsets** option is turned on. If you uncheck this option, you can adjust the text’s position using the four input fields above; these are:

Text Offset from Left
:   This adjusts the text’s position from the left edge of the object.
Text Offset from Top
:   This adjusts the text’s position from the top edge fo the object.
Width:
:   This adjusts the text box’s width.
Height
:   This adjusts the text box’s height.

Use the text’s rotation value to determine how the text appears when you rotate the object. By default, **Relative rotation** is turned on, which means that the text within an object will maintain its relative position when an object is rotated. Turn this off to set the text’s rotation independent of its bounding object. You can either enter a rotation value in the field or drag the circular control to rotate the text.

## Properties Inspectors (**Pro**) {#PropertiesInspectors}

Use the **Properties inspectors**, available only in OmniGraffle Pro, to manage the advanced properties of selected objects.

### Changing the Way Objects Connect with the Connections Inspector (**Pro**) {#TheConnectionsInspector}

Use this inspector to control how objects connect to one another.

![The Connections Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_12_connectionsinspector.png)

-   Turn off **Allow connections from lines** to make it impossible for connection lines to use the selected objects as sources or destinations.

-   If you have a group or a table selected, you can choose whether connection lines should be allowed to connect to objects in the group or only to the group as a whole.

-   The pop-up menu contains a bunch of magnet presets you can choose for the selected shape object. Magnets are points on a shape object that attract connection lines. You can choose to have no magnets, magnets placed according to cardinal directions (North, South, East, and West), magnets on each vertex (corner), or a certain number of magnets on each side of the shape.

**Note**\
 The Magnet options can be found in the **Edit** menu in the standard edition of OmniGraffle 6.

-   If you select some number of magnets per side, then hold Shift while opening the pop-up menu and selecting another number, the two numbers are added together; you can get up to 10 magnets per side in this way.

-   Of course, you can always use the Magnet tool to customize a shape’s magnet arrangement.

-   If you have a line selected, the Lines checkboxes become available. Deselect the Allow connections to other objects checkbox to make it impossible for the line to have an object as its source or destination. Deselect the Allow shapes to become labels checkbox to make it impossible to drag a shape onto the line and make it a line label; existing labels stay attached.

-   Use the **Object Rank** buttons to assign a hierarchical rank to the selected objects. Default lets OmniGraffle decide the rank based on connections, Minimum puts the objects at the top of the hierarchy, Maximum puts the objects at the bottom of the hierarchy, and Same makes sure that the objects end up on the same level. These assignments don’t change the directions of connection lines, so you can always select all of your objects and choose Default to return them to normal.

### Adding Data to Objects with the Note Inspector (**Pro**) {#TheNoteInspector}

The Note inspector contains a field for entering text to associate with the selected object, and a table of custom data.

![The Note Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_13_noteinspector.png)

The note can be formatted as Rich Text, which means you can use all of the different font styles and colors that you can use elsewhere in OmniGraffle. When you put the pointer over an object with a note, the note’s text appears in a help tag floating over the object.

You can use the custom data table to keep your own information about the object. Custom data is stored as key/value pairs: the Key is like a label for what type of information you are storing, and the Value is the information itself.

For example, imagine you have a diagram of a computer network, and you want to assign a model number to each component. Click the placeholder row or the plus button to create a new key/value pair. In the Key column, you would type Part Number, and in the Value field, you would type, say, A1181. This data doesn’t have any effect on the way OmniGraffle works; it’s just a way for you to store arbitrary data about objects in your diagram. To delete a row of data, click the ‘x’ button on the right side of the row.

Notes can be found by OS X’s Spotlight search feature, in case you need to find your OmniGraffle diagrams that contain certain words.

### Making Objects Interactive with the Action Inspector (**Pro**) {#TheActionInspector}

The **Action inspector** determines what should happen when someone clicks the selected object with the Action Browse Tool ![The Action Browse Tool](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_toolpalette_12_browsetool.png) in the toolbar. The default action is Does Nothing. You can click the object all you want, and nothing happens.

![The Action Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_14_actioninspector.png)

If you choose **Opens a URL** or **Opens a File**, you get a text field in which you can enter a URL or file path, along with two buttons: **Choose File** and **Open**. Click **Choose File** to browse your Mac’s hard drive for a file. Note that file paths are relative: they start from the folder containing the document you’re working on, not from the root of your hard drive. Click **Open** button to try opening the file or URL that you’ve specified. When the object is clicked, the file or URL is opened in the appropriate app.

If you choose **Runs a Script**, you get a text field for entering an AppleScript. The script that you enter is run such that `self` refers to the clicked object. Click **Check Syntax** to make sure that the AppleScript is correct, and then click **Run Script** to try it out. In Presentation Mode (**Option-⌘-P**), the script runs when an actionable object is clicked.

If you choose **Jumps Elsewhere**, you get another pop-up menu for choosing where in the current document to jump. You can jump to a specific canvas, the next or previous canvas, or a specific point or object on any canvas. Some of these options offer a tiny canvas preview, in which you can click or drag to indicate which object to highlight, which point to center on, or where to zoom.

If you choose **Shows or Hides Layers**, you can indicate whether to show, hide, or toggle the visibility of any layer of the current canvas.

## Canvas Inspectors {#CanvasInspectors}

Manage the appearance and properties of the current or selected canvases.

### Changing the Canvas Size and Scale with the Canvas Size Inspector {#TheCanvasSizeInspector}

Use this inspector to change the size of the canvas, how the canvas fits onto printed pages, or what kind of measurement units to use.

![The Canvas Size Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_15_canvassizeinspector.png)

-   The Canvas Size fields control the width and height of the canvas. You can use any of the units available in the Ruler, or enter a number of pages.

-   Select Size is multiple of printer sheets to make the edges of the canvas snap to the edges of pages. This prevents the canvas from ending in the middle of a page.

-   If you select Auto-adjust the canvas size, the canvas will grow or shrink to fit the objects you create.

-   When you print, if Print canvas on one printer sheet is selected, the canvas gets scaled up or down to fit a single piece of paper regardless of its size on the screen.

-   The Orientation of pages can be portrait (vertical), landscape (horizontal), or can be taken from the settings in Page Setup.

-   (**Pro**) Set the desired representation of one “point” as displayed on screen at 100% zoom to best fit your printing needs or screen pixel density (one Apple point is the default).

### The Canvas Fill Inspector {#TheCanvasFillInspector}

Select a canvas by clicking its preview in the sidebar to edit its background fill properties. As with the Object Fill inspector you can choose from nine fill styles and edit various parameters of each.

![The Canvas Fill Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_16_canvasfillinspector.png)

### The Background Image Inspector {#TheBackgroundImageInspector}

You can also add an image to a canvas. Just click the canvas in the sidebar and then use the Background Image inspector to place an image similarly to the Object Image inspector.

![The Background Image Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_17_backgroundimageinspector.png)

Use the controls to the left of the Mask button to Manually Size, Stretch, or Tile the image you’ve placed. Use the grid of four fields to position the image from left, from top, sized horizontally, or sized vertically. Use the slider at the bottom of the inspector to change the image’s opacity.

### The Units Inspector {#TheUnitsInspector}

Use the **Units inspector** to determine the unit of measure to use for the canvas and its rulers, as well as to set the scale and origin points.

![The Unit Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_18_unitsinspector.png)

#### Units {#Units}

The **Units** pop-up menu is where you set the type of measurement units you’d like to use for the current canvas. All of OmniGraffle’s supported units are listed, with their standard abbreviations.

The actual size of your diagram does not change when you change the units; it is merely measured differently. The ruler and the inspectors display measurements in whichever unit you select here.

Units marked with an asterisk (**\***) can be used as canvas units. This means that when you set up a **Unit Scale** (see the next section), only these units can be used on the left-side “actual size” part of the equation. Any kind of units can be used on the right-side “theoretical size” part of the scale equation.

#### Unit Scale {#UnitScale}

The **Unit Scale** pop-up menu can be used to interpret simple expressions of scale. By default, the scale is based on the item you choose in the **Units** pop-up. For example, if you set **Units** to **feet (ft)**, the **Scale** pop-up reads **12 in = 1 ft**.

If you choose **Custom** from the **Scale** pop-up, you can change the scale to suit the project you’re currently working on. For example, if you enter **1 cm = 1 m**, 1 cm on the ruler now becomes 1 meter, objects on the canvas that were 2 cm wide are now 2 meters wide, and so on. The Units setting changes to match the second value in the equation.

You can also enter a ratio. For example, if you set a Custom Scale to 1:12, the ruler units stay the same, but objects on the canvas now claim to be 12 times larger than they were before you changed the scale.

If you already have a scale set up and you conver directly to a different one, the objects change their actual size on the canvas to fit the new scale. For example, imagine you are working in 1 cm = 1 m, and then you convert the scale to 2 cm = 1 m. The marks on the ruler become twice as far apart as they were, and the objects on the canvas, staying true to the ruler, grow twice as large on the screen. You can get a new scale without resizing the objects by choosing from the Reset Scale To: section of the Unit scale pop-up menu.

#### Canvas Origin Points {#CanvasOriginPoints}

By default, the very upper-left corner of a canvas is its origin (that is, the point where the rulers’ measurements start from, where the coordinates are 0,0). To change the origin, enter values in the two Origin fields. (You can also drag the origin from the corner where the rulers meet.) The coordinates in the Geometry inspector are based on this origin point.

### Setting up a Grid with the Grid Inspector {#TheGridInspector}

Use this inspector to set up a grid on the canvas, so you can keep objects lined up nicely.

![The Grid Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_19_gridinspector.png)

The two fields at the top of the inspector are where you can set the values for the Major and Minor Grid spacing, respectively:

-   The **Major Grid Spacing** field determines how large each square of the main grid should be. Click the color well next to it to choose a color for the major grid.

-   The **Minor Grid Steps** field determines how many minor grid squares should fit across one major grid square. For example, if your major grid squares are 100 pixels across, and you have 10 minor grid steps, your minor grid squares are 10 pixels across. Click the color well next to it to choose a color for the minor grid.

The checkboxes beneath the Major and Minor Grid spacing fields provide additional control over how the grid is used and its appearance:

-   While the **Snap to grid** checkbox is selected, all objects fit themselves to the grid as you create or move them. (If you want to snap objects already on the canvas, use the Align To Grid button below.)

-   Select **Grid in front** to make the grid visible in front of objects on the canvas.

-   Select **Show grid lines** to show the Minor Grid lines on the canvas.

-   Select **Show major** to make the heavier Major Grid lines visible as well.

-   Select **Print grid** to include the grid when printing.

**Tip**\
 Choose **Arrange \> Grid \> Align Objects to Grid** (**Option-⌘-[**) to make all of the selected objects line up to the grid right away.

### The Canvas Data Inspector (**Pro**) {#TheCanvasDataInspector}

You can also edit the note and other metadata of a canvas itself. Just click the canvas in the sidebar and then use the Canvas Data inspector to add metadata for the canvas.

![The Canvas Data Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_20_canvasdatainspector.png)

As with the data added using the Properties Note inspector, this information is used primarily for indexing and doesn’t affect the appearance of your OmniGraffle document in any way.

### Automatically Arranging Objects with the Diagram Layout Inspector {#TheDiagramLayoutInspector}

Use this inspector to automatically lay out shapes based on the logical relationships established by the connection lines between them.

Use the **Fill Type** pop-up (the big button on the left) to select from one of four layout types: Hierarchical (the default), Force-directed, Circular, and Radial. The various controls within the Diagram Layout inspector change depending on which layout type you choose.

Hierarchical
:   The hierarchical layout creates layers of equally-ranked objects, extending in one direction.

![The Diagram Layout Inspector, showing the options for a Hierarchical layout](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_21_diagramlayoutinspector.png)

Force-directed
:   The force-directed layout grows in semi-random directions from the center, rather than in one particular direction from the edge.

![The Diagram Layout Inspector, showing the options for a Force-directed layout](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_21_diagramlayout_forcedirected.png)

Circular
:   The circular layout tries to arrange sibling shapes in a circle around their parent.

![The Diagram Layout Inspector, showing the options for a Circular layout](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_21_diagramlayout_circular.png)

Radial
:   The radial layout tries to arrange sibling shapes in arcs around their parent.

![The Diagram Layout Inspector, showing the options for a Radial layout](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_21_diagramlayout_radial.png)

When you use a hierarchical layout:

-   The Direction buttons change where the top level objects start, and which way to layer the lower level objects from there.

-   The Rank Separation field controls how far away each level of objects should be from the next.

-   The Object Separation field controls how far away each object should be from other objects on the same level.

When you use other layout methods:

-   Connection lines can stretch and compress, but you can adjust their average length by dragging the Line Length slider.

-   The Shape Repulsion slider determines how strongly the shapes try to avoid coming near one another. If the line length and shape repulsion are small enough, shapes can be made to overlap.

Finally, you can turn on **Auto layout** to make OmniGraffle distribute the objects on the canvas whenever the connections between them change.

## Document Inspectors {#DocumentInspectors}

Manage the properties of the document.

### The Format Inspector {#TheFormatInspector}

The pop-up menu determines whether to save your document as a **flat file** or a **file package**:

Flat file
:   A flat file is a single file on the disk, with all of the attached images embedded within.
File package
:   A file package is actually a folder disguised as a single file, with all of the attached images rattling around loose inside.

In some technical cases, it might be desirable to use one type or the other; if you don’t even know why this should matter, it’s safe to stick with the Automatic setting.

![The Format Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_22_formatinspector.png)

Normally OmniGraffle documents are “property list”–based text files. If you turn on **Compress on disk**, your file is instead saved in a binary format that takes up less space on the disk but whose innards can’t be read by scripts or text editors. If you don’t need to open an OmniGraffle document with a text editor, just go ahead and compress your files. This won’t hurt anything; it just makes the filesize a wee bit smaller.

### The Margins Inspector {#TheMarginsInspector}

Here you can specify your own page margins, or choose **Use printer margins** to default to the margins defined by your printer driver (or by any custom settings you’ve made in **File \> Page Setup**).

![The Margins Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_23_marginsinspector.png)

### Storing Information About your Document in the Data Inspector {#TheDataInspector}

The Document Data inspector has fields for lots of information about your document, in case you care to keep track of such things. The available fields are Subject, Copyright, Version, Description, and Comments. The pop-up menu includes options for adding information about the document’s Authors, Organizations, Languages, Keywords, and Projects.

![The Document Data Inspector](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_inspectors_24_documentdatainspector.png)

All of this data is made available to OS X’s Spotlight searching feature, to help you find the diagram you’re looking for.

## Using Stencils to Keep and Share Commonly Used Objects {#UsingStencils}

A stencil is a set of useful objects that you can drag into your diagrams. To see the available stencils—or any you’ve added—choose **View \> Show Inspector \> Stencils Library** (**⌘–6**), or click the rightmost button at the top of the Inspector sidebar.

![The default top-level view of the Stencils Library](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_stencils_01_defaultview.png)

-   Navigate through the hierarchy of your stencil collection using the back and forward buttons.

-   Enter something in the **Search** field to find stencils whose names match, or stencils containing objects whose text or notes match.

-   Select a stencil in the list to see its contents; select a whole folder to see the contents of all the stencils inside.

-   With a stencil or folder selected, use the three buttons to the right of the search field to change how the stencils are displayed in the sidebar: as a condensed cluster, a table, or a list with previews and metadata.

-   If you don’t need the entire object, but just one or all of its styles, drag a style from the style tray to an object in your document.

To use a stencil, just drag it from the Stencil Library and drop it anywhere on the canvas. A copy of the object is made and the original remains in the Stencil Library, so take as many copies as you need. You can do the same sort of selection tricks that you can do on a canvas, such as ⌘-clicking or -dragging a rectangle to select multiple objects, or Option-dragging an object to make another copy.

To search your stencils, type in the **Search** field at the top of the Inspector sidebar. OmniGraffle sifts through your stencils to help you find the object of your desire. Stencils that match appear in the special Search Results section of the stencil list. Normally, if any object on a stencil matches, then all objects on that stencil appear in the results. When searching from within a folder or stencil, however, the search field acts as a filter that only shows objects matching the filter text.

To make a new stencil, choose **File \> New Resource \> New Stencil** from the menu bar. You can edit the document that appears just like you would edit a normal OmniGraffle diagram. A preview of the stencil appears in the stencil window as you work. Once the stencil looks just how you want it, choose **File \> Save** (**⌘-S**).

To edit a stencil, open it in the Resource Browser (**Shift-⌘-N**). Then edit and save the stencil just like a normal OmniGraffle document.

## Using the Style Tray {#UsingTheStyleTray}

At the bottom of the Inspector sidebar, you’ll find a tray which contains style “chits” for the selected object.

![The Style Tray](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_styletray.png)

The isolated chit on the left represents all of the styles applied to the selected object, while the rest of the chits represent each of the styles applied to the object, such as fill, stroke, image, shadow, shape, font, and text position. Drag any of these chits to another object, to a group in the Selection inspector, or to a tool in the tool palette, to copy the style there.

**Note**\
 The absence of a style—such as having no stroke, no fill, or no shadow—also counts as a style. For instance, you can drag a “no fill” chit to an object to remove its fill.

If you select more than one object, only the styles that those objects have in common appear in the style tray.

## Rulers and the Inspector Bar {#RulersAndTheInspectorBar}

In addition to the grid, which you can turn on in the **Grid** Canvas inspector (**⌘–4**), you can also turn on rulers (**View \> Rulers**, or **⌘-R**) to help you position objects on the canvas.

You can use a combination of ruler guides and OmniGraffle’s Smart Guides to position and perfectly align objects on the canvas. To add a ruler guide to your canvas, click and hold on either the top or left ruler bar and then drag a guide onto the canvas. The guides you drag in are bright pink, so they are easy to recognize. There’s no limit to the number of guides you can drag onto the canvas, so don’t be shy.

By default, the very upper-left corner of a canvas is known as its *origin* (that is, the point from which all ruler measurements originate, and the coordinates are 0,0). To change the origin, click and drag the origin from the corner where the rulers meet. (Alternatively, you can enter **Origin** values in the **Units** Canvas inspector.) The coordinates in the Geometry inspector are based on this origin point.

![The origin point can be dragged out to any other position on the canvas](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_ruleroriginpoint.png)

To reset the origin to the 0,0 position, just click on the origin point between the two rulers. Click the origin point again and the origin point will change to its previous position.

When editing text, tab stops appear on the ruler and text formatting controls appear above it. You can style text, change the spacing and alignment, or drag tab stops to and from the ruler.

When you aren’t editing text, the area above the ruler—the Inspector Bar—contains controls for editing basic attributes of selected objects:

![Rulers and Inspector bar](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_rulersandinspectorbar_01.png)

1.  **Horizontal Object Position** — the object’s position from the left origin point.
2.  **Vertical Object Position** — the object’s position from the top origin point.
3.  **Object Width** — the object’s width.
4.  **Object Height** — the object’s height.
5.  **Shadow Casting Style** — set the shadow style for the object; for additional control over shadows, see the Shadow inspector.
6.  **Shape Style** — this pop-up lets you quickly select a shape style for the selected object.
7.  **Stroke** — choose a stroke style for the selected object.
8.  **Stroke Color** — choose a color for the stroke.
9.  **Stroke Thickness** — set the width (or thickness) for a stroke.

## Presentation Mode (**Pro**) {#PresentationMode}

For those times when you need to make a presentation, say to show off the new user interface for an app you’re developing or when you’re showing a client how you plan to redesign their home, OmniGraffle Professional offers Presentation mode. Available by choosing **View \> Start Presentation**, OmniGraffle takes over your entire screen so you can easily show off your work to everyone in the room.

**Tip**\
 To turn presentation mode on and off quickly, use **Option-⌘-P**. To leave presentation mode, press Escape or click the **×** button that appears when you move the mouse pointer to the bottom of the screen.

Each canvas acts as a slide; use the arrow keys to move between canvases. You can also press Return or Enter, or click, to move to the next canvas. If your Presentation preferences are set to highlight an object when you click it, doing so won’t advance to the next canvas; you can still click an empty area of the canvas to advance.

While in Presentation mode, you can get to the menu bar by moving your mouse to the top of the screen. The menu bar goes back into hiding when you move the mouse away. If you move the mouse to the bottom of the screen, a navigation interface appears, with buttons for going forward or back, exiting, or moving directly to a particular canvas.

You can highlight objects to draw attention to them during the presentation. Use the Presentation preferences to control how highlighting happens.

Actions set up in the Action inspector work while in presentation mode. When you click an object that has an action assigned, it performs the action as if you had clicked it with the Browse tool.

## Creating and Managing Templates {#CreatingAndManagingTemplates}

OmniGraffle comes with several templates, and you can create your own if you find that you’re creating the same kind of document over and over again. A template is a document that acts as a starting point for new documents.

To open a template, choose **File \> Resource Browser** (**Shift-⌘-N**) and select one of the available Templates.

![Choose a template from the Resource Browser](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_resourcebrowser_templates.png)

When you select a template in the Resource Browser, you’ll notice that the right side of the window reveals a little more detail about the template. If you find that you’re using a particular template often, click **Make Default** to specify the selected template as the default.

After you set a default template, OmniGraffle bypasses the Resource Browser and uses the default template for any new documents you create. If you don’t want to use the default template, just open the Resource Browser (**Shift-⌘-N**) and choose something else.

You can also create a new template or edit a template that belongs to you. When you create an OmniGraffle template, everything about it is preserved, from the canvas size and grid layout, to layers, to visibility of extras, to the automatic layout settings.

To create a template, choose **File \> New Resource \> New Template** from the menu bar, and then choose an existing template to use as a starting point. Set up the document exactly the way you want it, then save it to the Templates folder that OmniGraffle has already set up on your Mac. Once saved, your template is available in the Templates section of the Resource Browser.

**A Note About Where the Templates Are Stored**\
 Just in case you're wondering about where that Templates folder is, here's how you can find it on your Mac:

1.  Open a Finder window.
2.  Hold down the **Option** key and then choose **Go \> Library** in the menu bar. (Library only shows up if you're holding the Option key, so make sure that you've got that pressed down.)
3.  The Finder window puts you in your user account's Library folder (*\~/Library* for you Unix types). Now go through the following path to get to the Templates folder:
    1.  Containers
    2.  com.omnigroup.OmniGraffle6
    3.  Data
    4.  Library
    5.  Application Support
    6.  The Omni Group
    7.  OmniGraffle
    8.  Templates

    And again, for the Unix folks in the audience, that path is: *\~/Library/Containers/com.omnigroup.OmniGraffle6/Data/Library/Application\\ Support/The\\ Omni\\ Group/OmniGraffle/Templates*.

All templates end with a *.gtemplate* file extension.

## Preferences {#Preferences}

A standard feature among Mac apps, OmniGraffle’s preferences can be accessed from the menu bar (**OmniGraffle \> Preferences**), or with the **⌘-,** keyboard shortcut.

Two features that all of the preference panes offer are the ability to **Reset** (![The Reset button](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_button_reset.png)) any changes you’ve made to the defaults settings, and quick access to **Help** (![The Help button](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_button_help.png)) documentation for that pane.

### General Preferences {#GeneralPreferences}

The General preferences give you control over basic OmniGraffle settings, such as what OmniGraffle does at startup, whether new documents open with a blank canvas or you’re taken to the template chooser, and things like text editing and selection behaviors. You can also turn on Multi-Touch support for trackpad support, and opt for OmniGraffle to only show you the inspectors you need when you’re working in the canvas.

![OmniGraffles General preference pane](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_prefs_general.png)

Options include:

Startup
:   Select Create new document if nothing else is open to start with a new document when you aren’t making OmniGraffle remember open documents, or if there were no open documents the last time you quit.
New Documents
:   Select Open Resource Browser to be presented with a window for choosing from a variety of file sources each time you create a new document. Select Use Template, and choose your default template, if you’d rather bypass the browser. Either way, you can always get to the browser with the Resource Browser command in the File menu.
Text Editing
:   Decide how you would like the Return and Tab keys to behave while you are editing an object’s text. Whichever way you choose, you can hold Option while pressing the key to do the reverse instead.
Selection
:   Small objects get smaller versions of the handles that appear when you select them; if you really like the small ones, you can click Always use small selection handles to see them all the time.
:   When you click in the middle of a shape object that isn’t filled with an image or color, you might want to select the object or you might want to select whatever is behind it. Use the Click through objects with no fill checkbox to indicate which you prefer.

Multi-Touch
:   If you’d like to use Multi-Touch gestures with a trackpad on a compatible MacBook Pro or other device, click the checkbox here.
Help Tags
:   When you move or resize an object, a little help tag appears to let you know the object’s new location and size exactly. That is, unless you find it annoying and turn it off here.
:   (**Pro**) If you have OmniGraffle Pro, a second option is available for displaying any notes and metadata you've assigned to an object when you mouse over them.

Object ID Numbers
:   (**Pro**) If you’re accessing OmniGraffle objects with AppleScript, or you’re otherwise endeared to unique IDs, you can select Show object identification numbers to add a column to the list sidebar.
Full Screen
:   Choose whether to display the toolbar when in full screen mode.
Inspectors
:   Choose whether to hide inspectors that don’t apply to the currently selected object.
Preferences Reset button
:   Each preference pane has a Reset button in the lower left. Clicking this button returns all of the settings on the pane to their defaults. To reset all settings on all preference panes, hold Option while clicking the Reset button.

### Drawing Tools {#DrawingTools}

The Drawing Tools preferences provides you with another way to organize the tools you see in OmniGraffle’s toolbar and set their Hot Keys. You can also define how you interact with the tools, and set the behaviors for line creation and editing.

![OmniGraffles Drawing Tools preference pane](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_prefs_drawingtools.png)

You can drag tools around in the list to reorder them in the palette. Move the separator line to change where the expansion button appears in the toolbar; move it to the end of the list to get rid of the button entirely.

Double-click a tool’s hot key to change it. A hot key activates a tool for only as long as you hold the key down; once you release the key, the previously active tool becomes active again.

Inspect a tool
:   By default, in order to inspect a tool you need to Option-click it. If you prefer, you can make it take just one normal click to inspect a tool.
Keep tool active
:   By default, it takes one click to temporarily activate a tool, and two clicks to make a tool “stick” in an active state. You can choose to make tools stick after only one click, or make it so that every tool selection is temporary.
Line Creation
:   When you are creating a line, clicking an object will always connect the line to the object and end the line. If you click in an empty area of the canvas, though, you might want to end the line there or you might want just to add a point there and continue creating the line. Use this preference setting to indicate which you prefer.
Line Editing
:   When you double-click a line, you might prefer to add a new point to the line, or you might prefer to add a label. Choose one; Option-double-click will do the other.

### Presentation Preferences {#PresentationPreferences}

Available only in OmniGraffle Professional, use the Presentation preferences to configure your settings for making presentations.

![OmniGraffles Presentation preference pane](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_prefs_presentation.png)

Highlight Behavior
:   Choose whether to have an object become highlighted whenever you put the pointer on it, whenever you click it, or never. You can also choose to display a badge for objects that have actions set up in the Action inspector.
Highlight Appearance
:   Click the color well to choose a color for the highlight. Use the slider to adjust the thickness of the highlight.

**Tip**\
 To always match OS X’s highlight color (set in your Mac’s Appearance preferences), open the Colors palette and select the third button, **Color Palettes** in the window’s toolbar. In the **Palette** pop-up, choose **Developer** and then scroll down and choose **selectedControlColor** from the list of options.

### Update Preferences {#UpdatePreferences}

If you've purchased your copy of OmniGraffle 6 (Pro or Standard) from The Omni Group's website, OmniGraffle can automatically use your Internet connection to check for new and updated versions.

The Update Preferences panel doesn't exist if you have purchased OmniGraffle 6 from the Mac App Store. When there's a new version of OmniGraffle 6 available, the Mac App Store will alert you to download and install that on your Mac.

You can specify whether OmniGraffle will automatically check for updates Daily, Weekly, or Monthly, or if you’re really impatient, you can click **Check for Updates Now** to see if we’ve issued a new release. This is particularly helpful if you have **Check for updates** set to check Monthly and you’ve recently heard that a new update is available.

![OmniGraffles Update preferences](https://raw.github.com/developerworks/omnigraffile-6-manual/master/assets/images/og6_prefs_update.png)

If **Check for updates** is turned on, you will be notified when there is a new version of OmniGraffle ready for you to download and enjoy. Click **Check for Updates Now** to look for the newest version manually; you can also choose **OmniGraffle \> Check for Updates** from the menu bar.

Additionally, you can opt in to **Include system information** when OmniGraffle checks for updates. This sends basic information about your system to us, which we *only* use to better support various systems with future releases of OmniGraffle. And, as the Update preferences pane says: *“We promise to never use your information for nefarious purposes,”* which means that the information we receive about your system stays with us and is only used by us as we work on future updates of OmniGraffle.

[Home](index.html) [Drawing Basics 〉](index10_drawingbasics.html)
