/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageMultipleOff",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l1.4 1.41A2.99 2.99 0 0 0 3 6v6a3 3 0 0 0 3 3h6c.65 0 1.25-.2 1.74-.55l.86.85c-.59.44-1.31.7-2.1.7H5.76A3 3 0 0 0 8 17h4.5c1.06 0 2.04-.37 2.8-.98l1.85 1.83a.5.5 0 0 0 .7-.7l-15-15Zm5.63 7.04a2 2 0 0 0-.9.52L4.29 13A2 2 0 0 1 4 12V6a2 2 0 0 1 .28-1.02l4.2 4.2ZM14 6v5.88l.9.9A3 3 0 0 0 15 12V6a3 3 0 0 0-3-3H6a3 3 0 0 0-.78.1l.9.9H12a2 2 0 0 1 2 2Zm1.8 7.68.76.76c.28-.59.44-1.25.44-1.94V8a3 3 0 0 0-1-2.24v6.74a3.56 3.56 0 0 1-.2 1.18ZM11.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.8 2.91 3.32 3.31A2 2 0 0 1 12 14H6a2 2 0 0 1-1.02-.28l3.31-3.3a1 1 0 0 1 1.42 0Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l1.4 1.41A2.99 2.99 0 0 0 3 6v6c0 .65.2 1.25.55 1.74L7.6 9.7a2 2 0 0 1 .9-.52l6.1 6.11c-.58.44-1.3.7-2.09.7H5.76A3 3 0 0 0 8 17h4.5c1.06 0 2.04-.37 2.8-.98l1.85 1.83a.5.5 0 0 0 .7-.7l-15-15ZM15.8 13.68l.76.76c.28-.59.44-1.25.44-1.94V8a3 3 0 0 0-1-2.24v6.74a3.56 3.56 0 0 1-.2 1.18ZM5.22 3.1l9.68 9.68A3 3 0 0 0 15 12V6a3 3 0 0 0-3-3H6a3 3 0 0 0-.78.1Zm7.28 3.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.24 7.95L9.7 10.4a1 1 0 0 0-1.42 0l-4.03 4.04c.5.34 1.1.55 1.74.55h6c.65 0 1.25-.2 1.74-.55Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});