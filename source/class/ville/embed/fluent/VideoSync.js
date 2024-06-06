/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoSync",
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

   var pathdregular = "M4.5 4A2.5 2.5 0 0 0 2 6.5v3.76c.3-.26.64-.48 1-.66V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-.52c-.03.34-.1.68-.19 1h.71a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   var pathdfilled = "M13 6.5A2.5 2.5 0 0 0 10.5 4h-6A2.5 2.5 0 0 0 2 6.5v3.76a5.5 5.5 0 0 1 8.8 5.73A2.5 2.5 0 0 0 13 13.5v-7Zm1 1.43v4.15l2.76 2.35a.75.75 0 0 0 1.24-.57V6.2a.75.75 0 0 0-1.23-.57L14 7.93ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   
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