/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Toolbox",
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

   var pathdregular = "M6 4.5V6H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5ZM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5ZM4 7h12a1 1 0 0 1 1 1v2h-3v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5H3V8a1 1 0 0 1 1-1Zm9 4v.5a.5.5 0 0 0 1 0V11h3v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h3v.5a.5.5 0 0 0 1 0V11h6Z";
   var pathdfilled = "M6 4.5V6H4a2 2 0 0 0-2 2v2h4v-.5a.5.5 0 0 1 1 0v.5h6v-.5a.5.5 0 0 1 1 0v.5h4V8a2 2 0 0 0-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5ZM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5ZM18 11h-4v.5a.5.5 0 1 1-1 0V11H7v.5a.5.5 0 0 1-1 0V11H2v4c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-4Z";
   
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