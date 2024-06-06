/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingRetailToolbox",
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

   var pathdregular = "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V9.5c-.3-.22-.63-.38-1-.45V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c-.31.42-.5.94-.5 1.5V13H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 7.5V9h-1V8H6v2h5.5c-.22.3-.38.63-.45 1H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z";
   var pathdfilled = "M17 5.91A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.37-.5.91-.84 1.54-.96l.01-.04H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V9h.5c.56 0 1.08.19 1.5.5V5.91ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM9 13v4H6v-4h3Zm4.5-4h.5V8H6v2h5.5c.46-.6 1.18-1 2-1ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z";
   
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