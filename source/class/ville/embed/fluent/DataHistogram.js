/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataHistogram",
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

   var pathdregular = "M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1ZM7 9V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11c0-1.1.9-2 2-2h2Zm0 7v-6H5a1 1 0 0 0-1 1v5h3Zm6 0h3V8a1 1 0 0 0-1-1h-2v9Z";
   var pathdfilled = "M12 4.5c0-.83-.67-1.5-1.5-1.5h-1C8.67 3 8 3.67 8 4.5V17h4V4.5ZM13 6v11h3.5a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2h-2ZM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11c0-1.1.9-2 2-2Z";
   
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