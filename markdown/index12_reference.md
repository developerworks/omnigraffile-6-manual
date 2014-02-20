# Reference {#Reference}

## Exporting to Different Formats {#ExportingToDifferentFormats}

You can create files of several different types from your OmniGraffle diagrams. Select Export from the File menu. When you export, a new file is written to the disk, leaving your original document as it is on the screen. Of course, not all aspects of a diagram can be represented in all file formats.

The available file formats are:

-   BMP bitmap image — A legacy graphics format.

-   EPS vector image — Encapsulated PostScript. This is a common format in professional printing.

-   GIF bitmap image — A legacy graphics format prevalent on the web.

-   HTML Image Map — A hypertext file and a JPEG, PNG, or GIF image. URL actions in the original OmniGraffle document are coded into the image map as links so that the image can be clicked to follow them. (Note that actions on lines aren’t included, but actions on line labels are)

-   JPEG bitmap image — a popular compressed image format. You can lower the image quality to get a smaller file size.

-   OmniGraffle Document (**Pro**) — an OmniGraffle document. You can make the file read-only (not editable), and you can choose to include linked images in the file so that they show up properly on someone else’s computer.

-   OmniGraffle Stencil, OmniGraffle Template — Resources for OmniGraffle.

-   OmniOutliner 3 — Represent the diagram as a text outline, using the connection lines between shapes to create a hierarchy. This doesn’t work as well for diagrams that don’t have strictly tree-like structures.

-   PDF vector image — Portable Document Format. This is a nice cross-platform format that has good support for both vector components and bitmaps.

-   PNG bitmap image — Portable Network Graphics, a popular format for the Web. This format uses lossless compression to retain the details of an image while decreasing its file size. It supports transparency.

-   Photoshop® image (**Pro**) — Exports a layered .psd file that can be opened in Adobe Photoshop, or other graphics apps that can interpret a .psd file.

-   SVG vector drawing (**Pro**) — An open Internet standard that uses XML.

-   TIFF bitmap image — Tagged Image File Format. This format supports transparency.

-   Visio® XML document (**Pro**) — The XML-based file format for the Microsoft® diagramming application.

Depending on the file format you choose, you have different options. Most offer an Export Area option, with which you can choose how much of the document to export.

-   Current Selection — Only export the objects that are selected right now.

-   All Objects — Export all of the objects on the canvas, but not the empty areas.

-   Region — Specify a precise region of the canvas to export.

-   Current Canvas — Export the entire canvas.

-   Whole Document — Export everything, creating one image file for each canvas.

Depending on the format you choose, you can also choose a scale for exporting smaller or larger than actual size, the resolution, the compression level, and whether to make the background transparent.

## Importing from Other Applications {#ImportingFromOtherApplications}

Several different file formats can be understood by OmniGraffle. You can import these files by opening them just as you would open a normal OmniGraffle file.

(*PRO*) Microsoft® Visio® documents, templates, and stencils (.vsd, .vdx, .vst, .vtx, .vss, .vsx)

-   Documents saved by Microsoft® Visio® diagramming software in its XML-based file format (and now even in its original binary file format! Yeah!) can be read by OmniGraffle Pro. Note that while you can open the binary format, you can’t export to it; you’ll have to save as an OmniGraffle diagram or export to the XML format. Also note that graphics in the Microsoft® Enhanced Metafile (EMF) format can’t be imported.

DOT files (.dot)

-   OmniGraffle understands a subset \<DOTCommands.html\> of the DOT language used by Graphviz [http://www.graphviz.org/About.php](http://www.graphviz.org/About.php). This isn’t a full implementation of DOT, but it can be quite useful.

Diagram! 2 documents (.diagram2 and .dpalette2)

-   Diagram is a NeXTSTEP/OPENSTEP application similar to OmniGraffle. OmniGraffle can import the objects in a Diagram file, but not attached EPS images, sounds, or links.

OmniOutliner documents (.ooutline and .oo3)

-   When you open an OmniOutliner file, the items of the outline are interpreted as a diagram. A dialog appears; use it to indicate exactly how to interpret the outline:

-   Use the pop-up list to choose a diagram style.

-   (**Pro**) Use the table to assign objects in the diagram style to columns in the outline. If you want to show multiple columns of information for each item, use a diagram style that has grouped objects. You can also assign a column to the objects’ notes.

-   (**Pro**) Choose whether to put the outline in a completely new document or in a new canvas on the open document.

(**Pro**) Xcode projects (.xcode), Project Builder projects (.pbproj), and frameworks (.framework)

-   OmniGraffle uses the Objective-C headers to construct a diagram of the inheritance, protocol, and category relationships.

(**Pro**) Interface Builder nib files (.nib)

-   OmniGraffle graphs the connections in the nib file for easy visualization.

EOModeler files (.eomodeld)

-   OmniGraffle creates a diagram of the database relationships described by the file.

Folder structures

-   Drag a folder from the Finder and drop it on OmniGraffle’s application icon to map out the folder’s contents as a diagram.

## AppleScript Support (**Pro**) {#AppleScriptSupport}

OmniGraffle has extensive AppleScript support, making it easy for you to automate tasks within or to create entirely new OmniGraffle projects. To find out more about how OmniGraffle’s AppleScript object model and commands, launch AppleScript Editor (*/Applications/Utilities*, or use **Shift-⌘-U** while in the Finder), choose **File \> Open Dictionary**, and then choose your version of OmniGraffle from the Open Dictionary dialog.

You can store AppleScripts in OmniGraffle’s scripts folder, for easy access from the Scripts menu. You can also attach scripts to individual objects on a canvas, using the Action inspector. When you activate the Browse tool, then click an object with a script attached, the script runs.

If you select some objects and then choose **Edit \> Copy As \> AppleScript** from the menu bar, you get the exact lines of AppleScript necessary to create those objects. This is a great way to learn how OmniGraffle’s AppleScript support works, or to add specific objects to your own scripts.

## LinkBack {#LinkBack}

LinkBack is a way of embedding content between applications in such a way that you can always go back and edit the content with the software used to create it originally.

For lots of information about LinkBack, and a list of applications that support it, check the website at [www.linkbackproject.org](http://www.linkbackproject.org).

To embed OmniGraffle content in another LinkBack application, just copy and paste the content like you would normally. The same goes for embedding other applications’ content in OmniGraffle diagrams.

To embed OmniGraffle content inside a single object in OmniGraffle, select all of the objects on your canvas (**⌘-A**), choose **Edit \> Copy As \> PDF** from the menu bar, and then Paste (**⌘-V**). The objects you copied become a single image; double-clicking the object opens a new OmniGraffle window in which you can edit the objects to your heart’s content.

To edit OmniGraffle content embedded in another application:

-   Double-click the OmniGraffle content in the other application’s document; an OmniGraffle window appears containing the content.

-   Edit the content in the OmniGraffle window, just as you normally would.

-   In OmniGraffle, choose **File \> Save**; the content in the other application updates automatically.

-   To edit other LinkBack applications’ content embedded in an OmniGraffle diagram, just double-click it. When you save in the other application, the content in the OmniGraffle diagram updates.

## Licensing {#Licensing}

From the menu bar, choose **OmniGraffle \> Licenses** to see the Licenses dialog. From here you can review and edit your OmniGraffle licenses, which verify that you’ve actually paid for the software. (Thanks!)

To purchase a license:

-   Click **Buy Licenses** and you will find yourself magically transported to the Omni Store, where you can purchase a license for the Mac versions of our software. (Naturally, this only works if you have an Internet connection.)

To add a new license:

1.  From the menu bar, choose **OmniGraffle \> Licenses** to see the Licenses dialog.

2.  Click **Add License**.

3.  If you have a license key in an email message, copy and paste both the **Owner** name and the **License Key** into the appropriate fields. If you can’t copy and paste the information, you’ll have to type it in; make sure you copy everything exactly as it appears in your license message, including the dashes. Also, double-check that the license you’re entering really is a license for OmniGraffle 6, and that it is for the correct edition (Professional or Standard); licenses for other Omni products or earlier versions of OmniGraffle won’t work.

4.  Use the drop-down menu to select the type of license you would like to use. (Keep reading to learn about license types.)

    OmniGraffle has two different types of licenses:

    -   **Personal:** This license is for your personal use, and will only be available on this computer when you are logged in as the user who installed the license. You can install this license on more than one computer, but only for your personal use. You should not use the software on two different computers at the same time with this kind of license. If a personal license is available, the application will always use it.

    -   **Computer:** You can use this license on this computer, and so can any other user of this computer. However, you should not install this license on more than one computer. If both a network license and a computer license are available, the application will prefer the computer license.

5.  Click **Save**.

To remove a license:

1.  Select the license you want to remove.
2.  Click **Delete License**.

To move a license from one Mac to another:

1.  First, find the license file on the old computer. OmniGraffle license files are located in the folder *Library/Application Support/Omni Group/Software Licenses*, where *Library* is either at the top level of your system disk (for computer licenses), or in your Home folder (for personal licenses). The file you are looking for has a name such as *omnigraffle–123456.omnilicense*. Move this file to the new computer.

2.  On the new computer, choose **OmniGraffle \> Licenses** from the menu bar and then click **Add License**.

3.  On the sheet that appears, click **Import License File**.

4.  Locate and select the license file that you want to import.

5.  Click **Open**. If the license file is compatible—meaning, it is for the same version of OmniGraffle—the license will be added to OmniGraffle on your other system.

Again, the thing to remember here is that license keys are *version-specific*; the license key you have for OmniGraffle 5 is not compatible with OmniGraffle 6 (and vice versa).

**Note**\
 You can disregard the *Licensing* section if you've purchased your copy of OmniGraffle (Standard or Pro) from the Mac App Store. Licensing is only an issue if you've purchased your copy of OmniGraffle direct from The Omni Group's website.

## Regular Expression Syntax {#RegularExpressionSyntax}

OmniGraffle’s Find dialog supports the use of some simple regular expressions. A regular expression is a single string that represents a whole set of strings. The following syntax is used:

-   `a*` — zero or more instances of `a` (matches the longest string possible)
-   `a*?` — zero or more instances of `a` (matches the shortest string possible)
-   `a+` — one or more instances of `a` (matches the longest string possible)
-   `a+?` — one or more instances of `a` (matches the shortest string possible)
-   `a?` — zero or one instance of `a`
-   `^` — beginning of a line
-   `$` — end of a line
-   `.` — any character
-   `[a-z]` — all characters between `a` and `z`
-   `[abc-]` — `a`, `b`, `c`, or `-`
-   `(abc)` — matches `abc` and stores it as a group. Use the **Select or Replace** pop-up menu in the Find dialog to select or replace only one of these groups rather than the whole expression.
-   `\1` — text of first matched group
-   `a|b` — `a` or `b`
-   `\n` — newline
-   `\r` — carriage return
-   `\t` — tab character
-   `\d` — digit
-   `\D` — non-digit
-   `\w` — word character (alphanumeric or underscore)
-   `\W` — non-word character
-   `\s` — whitespace
-   `\S` — non-whitespace
-   `\` — escape the next character

Regular expressions are very popular, so you should be able to find plenty of information about them on the internet or in a good library or bookstore. Here are a few examples to get you started:

-   `\s*$` — matches whitespace at the end of a line.
-   `<.*?>` — matches strings that begin with \< and end with \>, such as XML tags.
-   `\S+@\S+` — very liberally matches things that resemble email addresses (*anything@anything*).
-   `(19|20)\d\d-\d\d?-\d\d?` — matches dates in the format YYYY-MM-DD, between 1900 and 2099

[主页](index.html) [Every Single Menu Command 〉](index13_menucommands.html)
