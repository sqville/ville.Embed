/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CastMultiple",
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

   var pathdregular = "M4 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 2-2.83V5Zm6 7.5a.5.5 0 0 1 1 0v.5h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4h1a.5.5 0 0 1 0 1H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-2.5Zm-.5-2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 7.5c0-.28.22-.5.5-.5a3.5 3.5 0 0 1 3.5 3.5.5.5 0 1 1-1 0A2.5 2.5 0 0 0 8.5 8a.5.5 0 0 1-.5-.5ZM8 5c0-.28.22-.5.5-.5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 0 0-5-5A.5.5 0 0 1 8 5Z";
   var pathdfilled = "M4 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3v-1a.5.5 0 0 0-1 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a.5.5 0 0 0 0-1H5a4 4 0 0 0-1 .13V5Zm4.75 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 7a.5.5 0 0 0 0 1 2.5 2.5 0 0 1 2.5 2.5.5.5 0 1 0 1 0A3.5 3.5 0 0 0 8.5 7Zm0-2.5a.5.5 0 1 0 0 1 5 5 0 0 1 5 5 .5.5 0 0 0 1 0 6 6 0 0 0-6-6Z";
   
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