/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideTextPerson",
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

   var pathdregular = "M5 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM5 10c0-.28.22-.5.5-.5h7a.5.5 0 0 1 .33.13c-.14.27-.24.56-.29.87H5.5A.5.5 0 0 1 5 10Zm6.05 5H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v1.9c.4.23.74.56 1 .94V6.5A2.5 2.5 0 0 0 15.5 4h-11A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6.54a3.3 3.3 0 0 1 .01-1ZM5.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm12-1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 16.75 12 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6.54a2.5 2.5 0 0 1 2.23-2.99 2.99 2.99 0 0 1-.73-2.51H5.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .33.13A3 3 0 0 1 18 9.34V6.5A2.5 2.5 0 0 0 15.5 4h-11ZM5 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM17.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 16.75 12 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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