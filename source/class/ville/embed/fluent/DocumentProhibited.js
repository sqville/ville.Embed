/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentProhibited",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.02c-.34.03-.68.1-1 .19V4Zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2ZM8.68 17.69a4.5 4.5 0 1 1-6.36-6.36 4.5 4.5 0 0 1 6.36 6.36ZM3.4 17.3a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Zm-.7-.7 4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 0 0 4 9.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm-8.68 9.07a4.5 4.5 0 1 0 6.36 6.36 4.5 4.5 0 0 0-6.36-6.36Zm5.65 5.65a3.5 3.5 0 0 1-4.57.33l4.9-4.9a3.5 3.5 0 0 1-.33 4.57ZM7.6 11.7l-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z";
   
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